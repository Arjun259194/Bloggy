import { ChangeEventHandler, useState } from "react";

type ReturnType<T> = [T, ChangeEventHandler<any>, () => void];

export default function useForm<T>(init: T): ReturnType<T> {
  const [state, setState] = useState(init);

  return [
    state,
    (event) => setState({ ...state, [event.target.name]: event.target.value }),
    () => setState(init),
  ];
}
