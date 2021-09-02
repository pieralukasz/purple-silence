import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  close: {
    position: "absolute",
    top: theme.spacing(),
    right: theme.spacing(),
  },
}));

export default useStyles;
