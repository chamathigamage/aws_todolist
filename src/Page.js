import React from "react";
import styled from "styled-components";
import UncompletedListElement from "./UncompletedListElement";
import ListElement from "./ListElement";
import CompletedListElement from "./CompletedListElement";
import ShowAllButton from "./ShowAllButton";
import Input from "./Input";
import { getTasks, updateTask, createTask } from "./TasksApi";

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: [],
      showAll: false,
    };
    this.getApiData();
  }

  getApiData() {
    getTasks().then((data) => {
      this.setState({ input: data.Items });
    });
  }

  GetInputValue(event) {
    let value = event.target.value;
    if (event.key === "Enter") {
      event.target.value = "";
      this.setState({
        input: [...this.state.input, { TaskStatus: false, TaskDetails: value }],
      });
      createTask(value, false).then(() => {
        this.getApiData();
      });
    }
  }

  showAllToggle = () => {
    this.setState({ showAll: !this.state.showAll });
  };

  onComplete = (item) => {
    const newInput = this.state.input.map((element) => {
      if (element === item) {
        return {
          TaskStatus: true,
          TaskDetails: item.TaskDetails,
          TaskId: item.TaskId,
        };
      }
      return element;
    });
    this.setState({
      input: newInput,
    });
    updateTask(item).then(() => {
      this.getApiData();
    });
  };

  render() {
    return (
      <>
        <ContentContainer>
          <ListContainer>
            <h1> To Do List</h1>
            <ListElementContainer>
              <div>
                <h3>Incomplete</h3>
                {this.state.input.map((item) => (
                  <UncompletedListElement
                    value={item.TaskDetails}
                    completed={item.TaskStatus}
                    onComplete={() => this.onComplete(item)}
                  />
                ))}
              </div>
              <div>
                {this.state.showAll ? (
                  <>
                    <h3>All</h3>
                    {this.state.input.map((item) => (
                      <ListElement
                        value={item.TaskDetails}
                        completed={item.TaskStatus}
                        onComplete={() => this.onComplete(item)}
                      />
                    ))}
                  </>
                ) : (
                  <>
                    <h3>Completed</h3>
                    {this.state.input.map((item) => (
                      <CompletedListElement
                        value={item.TaskDetails}
                        completed={item.TaskStatus}
                        onComplete={() => this.onComplete(item)}
                      />
                    ))}
                  </>
                )}
                <ShowAllButton
                  current={this.state.showAll}
                  showAll={this.showAllToggle}
                />
              </div>
            </ListElementContainer>
          </ListContainer>
          <Input onclick={(event) => this.GetInputValue(event)} />
        </ContentContainer>
      </>
    );
  }
}
const ListElementContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const ListContainer = styled.div`
  background-color: #fef9e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const ContentContainer = styled.div`
  width: 50%;
`;
