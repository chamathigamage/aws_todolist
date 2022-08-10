export function getTasks() {
  return fetch(
    "https://pmrde2sxo9.execute-api.ap-southeast-2.amazonaws.com/prod/task"
  ).then((response) => response.json());
}
export function updateTask(item) {
  return fetch(
    "https://pmrde2sxo9.execute-api.ap-southeast-2.amazonaws.com/prod/task",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        TaskID: item.TaskId,
        newTaskStatus: !item.TaskStatus,
      }),
    }
  )
    .then((response) => response.json())
    .then((o) => {
      console.log("Success:", o.TaskStatus);
    })
    .catch((error) => {
      console.error("Error creating task: ", error);
    });
}
export function createTask(taskDetail, taskStatus) {
  return fetch(
    "https://pmrde2sxo9.execute-api.ap-southeast-2.amazonaws.com/prod/task",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        TaskDetails: taskDetail,
        TaskStatus: taskStatus,
      }),
    }
  )
    .then((response) => response.json())
    .then((o) => {
      console.log("Success:", o.TaskDetails);
    })
    .catch((error) => {
      console.error("Error creating task: ", error);
    });
}
