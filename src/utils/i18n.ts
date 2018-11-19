const dict = {
  en: {
    intro: "Misaka is here to help.",
    start: "Getting started with a copy of @/pages/Home/EmptyComponentTemplate.vue",
    link: "vue-typescript-pug-stylus template by"
  }
};

export default function say(word: keyof typeof dict.en): string {
  return dict.en[word];
}
