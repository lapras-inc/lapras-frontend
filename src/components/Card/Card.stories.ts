import Card from "./Card.vue";

export default { title: "Card" };

export const card = () => ({
  components: { Card },
  template: "<Card>カードの<br>内容が<br>入ります</Card>"
});
