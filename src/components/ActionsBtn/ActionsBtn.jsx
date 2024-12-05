import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import css from "./ActionsBtn.module.css";
import Edit from "../Edit/Edit";
import { LuTrash2 } from "react-icons/lu";

const ActionsBtn = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={css.genDiv}>
      <Button
        aria-describedby={id}
        className={css.actionsBtn}
        onClick={handleClick}
      >
        ...
      </Button>
      <Popover
      className={css.popover}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={{
          sx: {
            // ml: -11,
            // mt: 1,
            borderRadius: "15px", // Применяем скругление к корневому элементу Popover
            boxShadow: "0 4px 47px 0 rgba(18, 20, 23, 0.08)", // Сохраняем тень
            overflow: "hidden", // Обрезаем содержимое
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            padding: "12px 24px",
            // backgroundColor: "#fff",
          },
        }}
      >
        <Edit />
        <button className={css.popoverButton}>
          <LuTrash2 className={css.trashIcon} />
          Delete
        </button>
      </Popover>
    </div>
  );
};

export default ActionsBtn;
