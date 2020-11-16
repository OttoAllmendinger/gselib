type Callback = (...v: any[]) => void;

export interface SignalEmitter {
  emit(k: string, ...v: any[]);

  disconnectAll();

  connect(k: string, c: Callback);
}
