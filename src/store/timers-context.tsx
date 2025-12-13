import { createContext, useContext, useReducer, type ReactNode } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimerState = {
  isRunning: true,
  timers: []
}

type TimersContextValue = TimerState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

// export const TimersContext = createContext<TimersContextValue | null>(null);
const TimersContext = createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({ children }: TimersContextProviderProps) {
  useReducer(reducer, initialState);

  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      
    },
    startTimer() {
      
    },
    stopTimer() {
      
    },
  }

  return (
    <TimersContext.Provider value={ctx}>
      {children}
    </TimersContext.Provider>
  );
}


// creating a custom hook to use the context value without using useContext
export function useTimersContext() {
  const timersCtx = useContext(TimersContext);
  if (timersCtx === null) {
    throw new Error('Timers Context is null, that should be not the case here');
  }
  return timersCtx;
}