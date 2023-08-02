import { Attachment, Group, ModeComment } from "@mui/icons-material";
import {
  Button,
  Card as MuiCard,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Card = ({ temporaryHideMedia }) => {
  return (
    <>
      {temporaryHideMedia ? (
        <MuiCard
          sx={{
            cursor: "pointer",
            boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
            overflow: "unset",
          }}
        >
          <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
            <Typography>Lizard</Typography>
          </CardContent>
        </MuiCard>
      ) : (
        <MuiCard
          sx={{
            cursor: "pointer",
            boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
            overflow: "unset",
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
            <Typography>Lizard</Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ p: "0 4px 8px 4px" }}>
            <Button size="small" startIcon={<Group />}>
              20
            </Button>
            <Button size="small" startIcon={<ModeComment />}>
              15
            </Button>
            <Button size="small" startIcon={<Attachment />}>
              10
            </Button>
          </CardActions>
        </MuiCard>
      )}
    </>
  );
};

export default Card;
