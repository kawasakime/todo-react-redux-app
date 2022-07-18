export const containerTypes = [
  { status: "todo", title: "Список задач" },
  { status: "inProgress", title: "На выполнении" },
  { status: "complete", title: "Выполненные" },
];

export const changeType = (status) => {
  const index = containerTypes.findIndex((e) => e.status === status) + 1;
  return containerTypes[index];
};
