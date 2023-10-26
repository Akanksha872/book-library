import Alert, { AlertColor } from "@mui/material/Alert";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useEffect, useState } from "react";

interface SnackbarProps {
  open: boolean;
  message: string;
  type: AlertColor;
}

const SnackbarNotification: React.FC<SnackbarProps> = ({
  open,
  message,
  type,
}) => {
  const [openAlert, setOpenAlert] = useState(open);

  useEffect(() => {
    setOpenAlert(open);
  }, [open]);

  const handleClose = () => {
    setOpenAlert(false);
  };

  const anchorOrigin: SnackbarOrigin = {
    vertical: "top",
    horizontal: "right",
  };

  return (
    <Snackbar anchorOrigin={anchorOrigin} open={openAlert} autoHideDuration={60} >
      <Alert severity={type} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarNotification;
