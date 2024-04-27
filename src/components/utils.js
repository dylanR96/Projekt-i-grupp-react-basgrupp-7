export const getCardColorClass = () => {
    switch (selectedVendor) {
      case 'Bitcoin':
        return 'bitcoinColor';
      case 'Ninja-Bank':
        return 'ninjaBankColor';
      case 'Block-Chain-Inc':
        return 'blockChainIncColor';
      case 'Evilk-Corp':
        return 'evilCorpColor';
      default:
        return '';
    }
  };