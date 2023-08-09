import {
  DndContext,
  DragOverlay,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  defaultDropAnimationSideEffects,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { mapOrder } from "~/utils/formatter";
import ListColumns from "./ListColumns/ListColumns";
import Column from "./ListColumns/Column/Column";
import Card from "./ListColumns/Column/ListCards/Card/Card";
import { cloneDeep } from "lodash";

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};

const BoardContent = ({ board }) => {
  const [orderedColumns, setOrderedColumns] = useState([]);

  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);
  // Luu active column ban dau
  const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] =
    useState(null);

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });
  // Nhan giu 250ms va dung sai cua cam ung 5px
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 5 },
  });
  const sensors = useSensors(pointerSensor, mouseSensor, touchSensor);

  useEffect(() => {
    const orderedColumns = mapOrder(
      board?.columns,
      board?.columnOrderIds,
      "_id"
    );
    setOrderedColumns(orderedColumns);
  }, [board]);

  const findColumnByCardId = (cardId) => {
    return orderedColumns?.find((column) =>
      column?.cards?.map((card) => card._id)?.includes(cardId)
    );
  };

  const moveCardBetweenDifferentColumn = (
    overColumn,
    overCardId,
    active,
    over,
    activeColumn,
    activeDragginCardId,
    activeDragItemData
  ) => {
    setOrderedColumns((prevColumns) => {
      const overCardIndex = overColumn?.cards?.findIndex(
        (card) => card._id === overCardId
      );
      const isBelowOverItem =
        active.rect.current.translated &&
        active.rect.current.translated.top > over.rect.top + over.rect.height;
      const modifier = isBelowOverItem ? 1 : 0;
      let newCardItem =
        overCardIndex >= 0
          ? overCardIndex + modifier
          : overColumn?.cards?.length + 1;

      // Clone mang OrderedColumnState cu ra mot cai moi de xu ly data roi return ==> cap nhat lai orderedColumnsState moi
      const nextColumns = cloneDeep(prevColumns);
      const nextActiveColumn = nextColumns.find(
        (column) => column._id === activeColumn._id
      );
      const nextOverColumn = nextColumns.find(
        (column) => column._id === overColumn._id
      );
      // Old column
      if (nextActiveColumn) {
        nextActiveColumn.cards = nextActiveColumn.cards?.filter(
          (card) => card._id !== activeDragginCardId
        );
        nextActiveColumn.cardOrderIds = nextActiveColumn.cards?.map(
          (card) => card._id
        );
      }
      // New column
      if (nextOverColumn) {
        nextOverColumn.cards = nextOverColumn.cards.filter(
          (card) => card._id !== activeDragginCardId
        );
        const rebuild_activeDraggingCardData = {
          ...activeDragItemData,
          columnId: nextOverColumn._id,
        };
        nextOverColumn.cards = nextOverColumn.cards.toSpliced(
          newCardItem,
          0,
          rebuild_activeDraggingCardData
        );
        nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
          (card) => card._id
        );
      }

      return nextColumns;
    });
  };

  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active.id);
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    );
    setActiveDragItemData(event?.active?.data?.current);

    // Neu keo card thi moi thuc hien hanh dong set gia tri oldColumn
    if (event?.active?.data?.current?.columnId) {
      setOldColumnWhenDraggingCard(findColumnByCardId(event?.active.id));
    }
  };

  // Trigger trong qua trinh keo(drag)
  const handleDragOver = (event) => {
    // Khong action neu drag column
    if (ACTIVE_DRAG_ITEM_TYPE.COLUMN.indexOf(activeDragItemType) !== -1) return;
    const { active, over } = event;
    if (!active || !over) return;
    console.log(active);
    const {
      id: activeDragginCardId,
      data: { current: activeDraggingCardData },
    } = active;
    // overCard: la card dang tuong tac tren hoac duoi voi card active(dragging)
    const { id: overCardId } = over;

    const activeColumn = findColumnByCardId(activeDragginCardId);
    const overColumn = findColumnByCardId(overCardId);

    if (!activeColumn || !overColumn) return;

    if (activeColumn._id !== overColumn._id) {
      moveCardBetweenDifferentColumn(
        overColumn,
        overCardId,
        active,
        over,
        activeColumn,
        activeDragginCardId,
        activeDragItemData
      );
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    // Kiem tra neu khong ton tai over(return de tranh loi)
    if (!active || !over) return;

    if (ACTIVE_DRAG_ITEM_TYPE.CARD.indexOf(activeDragItemType) !== -1) {
      const {
        id: activeDragginCardId,
        data: { current: activeDraggingCardData },
      } = active;
      // overCard: la card dang tuong tac tren hoac duoi voi card active(dragging)
      const { id: overCardId } = over;

      const activeColumn = findColumnByCardId(activeDragginCardId);
      const overColumn = findColumnByCardId(overCardId);

      if (!activeColumn || !overColumn) return;
      if (oldColumnWhenDraggingCard._id !== overColumn._id) {
        moveCardBetweenDifferentColumn(
          overColumn,
          overCardId,
          active,
          over,
          activeColumn,
          activeDragginCardId,
          activeDragItemData
        );
      } else {
        const oldCardIndex = oldColumnWhenDraggingCard?.cards?.findIndex(
          (c) => c._id === active.id
        );
        const newCardIndex = overColumn?.cards?.findIndex(
          (c) => c._id === overCardId
        );
        // Dung arratMove vi keo card trong mot column thu tuong tu voi logic keo column trong mot board content
        const dndOrderedCards = arrayMove(
          oldColumnWhenDraggingCard?.cards,
          oldCardIndex,
          newCardIndex
        );
        setOrderedColumns((prevColumns) => {
          // Clone mang OrderedColumnState cu ra mot cai moi de xu ly data roi return ==> cap nhat lai orderedColumnsState moi
          const nextColumns = cloneDeep(prevColumns);
          // Tim toi column ma chung ta dang tha
          const targetColumn = nextColumns.find(
            (column) => column._id === overColumn._id
          );
          targetColumn.cards = dndOrderedCards;
          targetColumn.cardOrderIds = dndOrderedCards.map((card) => card._id);

          return nextColumns;
        });
      }
    }

    // Neu khac voi vi tri ban dau
    if (
      ACTIVE_DRAG_ITEM_TYPE.COLUMN.indexOf(activeDragItemType) !== -1 &&
      active.id !== over.id
    ) {
      // Lay vi tri cu tu active
      const oldColumnIndex = orderedColumns.findIndex(
        (c) => c._id === active.id
      );
      // Lay vi tri moi tu over
      const newColumnIndex = orderedColumns.findIndex((c) => c._id === over.id);

      // Dung arrayMove cua dnd-kit de sap xep lai Column ban dau
      const dndOrderedColumns = arrayMove(
        orderedColumns,
        oldColumnIndex,
        newColumnIndex
      );
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id);
      setOrderedColumns(dndOrderedColumns);
    }

    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
    setOldColumnWhenDraggingCard(null);
  };

  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <Box
        sx={{
          p: "10px 0",
          width: "100%",
          height: (theme) => theme.trelloCustom.boardContentHeight,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        }}
      >
        <ListColumns columns={orderedColumns} />
        <DragOverlay dropAnimation={customDropAnimation}>
          {(!activeDragItemId || !activeDragItemType) && null}
          {activeDragItemId &&
            activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
              <Column column={activeDragItemData} />
            )}
          {activeDragItemId &&
            activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
              <Card column={activeDragItemData} />
            )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
};

export default BoardContent;
