import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Attachment, Group, ModeComment } from "@mui/icons-material";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Card as MuiCard,
  Typography,
} from "@mui/material";

const Card = ({ card }) => {
  const shouldShowCardActions = () => {
    return (
      !!card?.memberIds.length ||
      !!card?.comments.length ||
      !!card?.attachments.length
    );
  };

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card?._id, data: { ...card } });
  const dndKitCardStyles = {
    touchAction: "none", // Danh cho sensor default PointerSensor
    transform: CSS.Translate.toString(transform),
    transition,
    height: "100%",
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? "1px solid #2ecc71" : undefined,
  };

  return (
    <MuiCard
      ref={setNodeRef}
      style={dndKitCardStyles}
      {...attributes}
      {...listeners}
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        overflow: "unset",
        display: card?.FE_PlaceholderCard ? "none" : "block",
        border: "1px solid transparent",
        "&:hover": { borderColor: (theme) => theme.palette.primary.main },
        // overflow: card?.FE_PlaceholderCard ? "hidden" : "unset",
        // height: card?.FE_PlaceholderCard ? "0px" : "unset"
      }}
    >
      {card?.cover && (
        <CardMedia
          sx={{ height: 140 }}
          image={card?.cover}
          title={card?.title}
        />
      )}
      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
        {card?.cover && (
          <Typography variant="body2" color="text.secondary">
            {card?.description}
          </Typography>
        )}
      </CardContent>
      {shouldShowCardActions && (
        <CardActions sx={{ p: "0 4px 8px 4px" }}>
          {!!card?.memberIds.length && (
            <Button size="small" startIcon={<Group />}>
              {card?.memberIds.length}
            </Button>
          )}
          {!!card?.comments.length && (
            <Button size="small" startIcon={<ModeComment />}>
              {card?.comments.length}
            </Button>
          )}
          {!!card?.attachments.length && (
            <Button size="small" startIcon={<Attachment />}>
              {card?.attachments.length}
            </Button>
          )}
        </CardActions>
      )}
    </MuiCard>
  );
};

export default Card;
