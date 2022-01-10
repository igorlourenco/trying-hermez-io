import hermez from "@hermeznetwork/hermezjs";

let hermezInitialization = null;

export const initializeHermez = async (): Promise<void> => {
  if (!hermezInitialization) {
    await hermez.TxPool.initializeTransactionPool();
    hermezInitialization = true;
  }
};
