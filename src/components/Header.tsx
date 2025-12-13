// import { useContext } from 'react';
import { useTimersContext } from "../store/timers-context.tsx";
import Button from "./UI/Button.tsx";
// import { TimersContext } from '../store/timers-context.tsx';

export default function Header() {
  // const timersCtx = useContext(TimersContext)!;

  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button
        onClick={
          timersCtx.isRunning ? timersCtx.stopTimer : timersCtx.startTimer
        }
      >
        {timersCtx.isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
}
