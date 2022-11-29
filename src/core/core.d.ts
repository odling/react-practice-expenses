/* eslint-disable @typescript-eslint/no-namespace */
import React from "react";

export namespace Component {
  export type GenericComponent<P> = React.FC<{ className?: string } & P>;
}

export type ValueOf<T> = T[keyof T];

export namespace Action {
  export type GenericAction<P> = (props: P) => void;
}
