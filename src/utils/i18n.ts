const dict = {
  en: {
    intro: "Misaka is here to help."
  }
};

export default function say(word: keyof typeof dict.en): string {
  return dict.en[word];
}
