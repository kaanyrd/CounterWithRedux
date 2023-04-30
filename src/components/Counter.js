import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import classes from "./Counter.module.css";
import { themeActions } from "../store/theme";
import MaterialUISwitch from "./UI/SwitchBtn";

function Counter() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: "1",
    },
  });

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const theme = useSelector((state) => state.toggle.theme);

  const incrementFunc = (data) => {
    // console.log(data);
    dispatch(counterActions.increment(+data.amount));
  };
  const decrementFunc = (data) => {
    dispatch(counterActions.decrement(+data.amount));
  };
  const resetFunc = () => {
    reset({
      amount: "1",
    });
    dispatch(counterActions.reset());
  };
  const changeThemeFunc = () => {
    dispatch(themeActions.changeTheme());
  };
  ////payload içerisinde değeri göndere

  return (
    <div className={theme ? classes.app : classes.active}>
      <span className={classes.changeThemeBtn}>
        {/* <button>Change Theme</button> */}
        <MaterialUISwitch
          onClick={changeThemeFunc}
          inputProps={{ "aria-label": "controlled" }}
          color="warning"
        />
      </span>
      <div className={classes.counter}>
        <h1>Counter: {counter}</h1>
      </div>
      <div>
        <TextField
          {...register("amount", { min: -100, max: 100, maxLength: 3 })}
          fullWidth
          label="Amount"
          id="fullWidth"
          defaultValue="1"
          placeholder="Your amount is 0!"
          min="-100"
          max="100"
          type="number"
        />
      </div>
      <div className={classes.buttons}>
        <Button onClick={handleSubmit(resetFunc)} variant="contained">
          RESET
        </Button>

        <Button
          onClick={handleSubmit(decrementFunc)}
          variant="contained"
          color="error"
        >
          Decrease ({watch("amount")})
        </Button>

        <Button
          onClick={handleSubmit(incrementFunc)}
          variant="contained"
          color="success"
        >
          Increas ({watch("amount")})
        </Button>
      </div>
      {errors.amount && (
        <div className={classes.errors}>
          Please enter a value between -100 and 100 !
        </div>
      )}
    </div>
  );
}

export default Counter;
