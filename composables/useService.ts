export function useService() {
  const selected = ref(1);
  const services = ref([
    { id: 1, title: "Consultoria e Legislação", img: "" },
    { id: 2, title: "Recrutamento e Seleção", img: "" },
    { id: 3, title: "Headhunting", img: "" },
    { id: 4, title: "Serviços Offshore", img: "" },
    { id: 5, title: "Liquidação e Processamento Salarial", img: "" },
    { id: 6, title: "Formações", img: "" },
  ]);

  function handleSelected(value) {
    selected.value = value;
  }

  return { services, selected, handleSelected };
}