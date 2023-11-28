import { IBank } from '@customTypes/bankCard';

export const generateRandomBanks = (banks: IBank[]): IBank[] => {
  const randomBanks: IBank[] = [];
  const bankIds: Set<number> = new Set();
  const numberOfBanks = Math.floor(Math.random() * 3) + 1;

  while (randomBanks.length < numberOfBanks) {
    const randomIndex = Math.floor(Math.random() * banks.length);
    const randomBank = banks[randomIndex];

    if (!bankIds.has(randomBank.id)) {
      randomBanks.push(randomBank);
      bankIds.add(randomBank.id);
    }
  }

  return randomBanks;
};
