import React, { Fragment, useCallback, useContext, useState } from 'react';
import cn from 'classnames';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { DATE_FORMAT } from '@constants/common';
import { Accordion, Button, Icon, Title } from '@atoms';
import { List, Task } from '@molecules';
import { TodosContext } from '@context';
import { TodoForm } from '@organisms';

import { TodosBlock, TodosContainer, TodosHead, TodosText } from './styles';

const Todos = () => {
  const { todos, updateTodos } = useContext(TodosContext);

  const [showForm, setShowForm] = useState(false);

  const tomorrowDate = dayjs().add(1, 'day').format(DATE_FORMAT);
  const hasTodos = Object.keys(todos).length > 0;

  const todayTasks = todos[dayjs().format(DATE_FORMAT)];
  const otherTasks = Object.fromEntries(
    Object.entries(todos).filter(([key, value]) => key !== dayjs().format(DATE_FORMAT)),
  );

  const updateTodosObject = useCallback(
    (todo) => {
      const currentTodos = { ...todos };

      const todoTemplate = (current) => ({
        title: current.title,
        description: current.description,
        done: false,
        id: uuidv4(),
        color: current.color,
      });

      if (currentTodos[todo.date]) {
        currentTodos[todo.date].push(todoTemplate(todo));
      } else {
        currentTodos[todo.date] = [todoTemplate(todo)];
      }

      return currentTodos;
    },
    [todos],
  );

  const handleDoneChange = (event, currentTaskData) => {
    const changedTodos = todos[currentTaskData.date].map((item) => {
      if (item.id === currentTaskData.id) {
        return { ...item, done: event.target.checked };
      }
      return item;
    });
    const newTodos = { ...todos, [currentTaskData.date]: changedTodos };

    updateTodos(newTodos);
  };

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCancelForm = useCallback(() => {
    setShowForm(false);
  }, []);

  const handleSubmitForm = useCallback(
    (values) => {
      const newTodos = updateTodosObject(values);

      updateTodos(newTodos);
    },
    [updateTodos, updateTodosObject],
  );

  return (
    <TodosContainer>
      {hasTodos ? (
        <Fragment>
          {todayTasks && (
            <TodosBlock $mb="34">
              <TodosHead>
                <Title $mb="14" $small icon={<Icon name="checked" className={cn('checked-icon')} />}>
                  Today Tasks:
                </Title>
              </TodosHead>
              <List $secondary $gap="12">
                {todayTasks?.map((task) => (
                  <List.Item key={task.id}>
                    <Task
                      data={task}
                      handleDoneChange={(val) =>
                        handleDoneChange(val, { id: task.id, date: dayjs().format(DATE_FORMAT) })
                      }
                    />
                  </List.Item>
                ))}
              </List>
            </TodosBlock>
          )}
          <TodosBlock $mb="34">
            <List $gap="33">
              {Object.keys(otherTasks).map((date) => (
                <List.Item key={date}>
                  <Accordion>
                    <Accordion.Summary expandIcon={<Icon name="expand-icon" />}>
                      {date === tomorrowDate ? 'Tomorrow Tasks' : `${dayjs(date).format('DD/MM')} Tasks`}
                    </Accordion.Summary>
                    <Accordion.Details>
                      <List $gap="12">
                        {otherTasks[date]?.map((task) => (
                          <List.Item key={task.id}>
                            <Task
                              data={task}
                              handleDoneChange={(val) => handleDoneChange(val, { id: task.id, date })}
                            />
                          </List.Item>
                        ))}
                      </List>
                    </Accordion.Details>
                  </Accordion>
                </List.Item>
              ))}
            </List>
          </TodosBlock>
        </Fragment>
      ) : (
        !showForm && <TodosText>You have no ToDos! Click the button below to create a new one</TodosText>
      )}

      {showForm ? (
        <TodoForm onSubmit={handleSubmitForm} handleCancel={handleCancelForm} />
      ) : (
        <Button onClick={handleButtonClick}>Add new task</Button>
      )}
    </TodosContainer>
  );
};

export default Todos;
