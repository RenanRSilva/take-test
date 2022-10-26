export const useFirstLetters = (name) => {
   const firstLetters = name
      .split(' ')
      .map((word) => word[0])
      .join('');
   return firstLetters;
};
