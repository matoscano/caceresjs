import { put, call } from "redux-saga/effects";
import {
  getTodosWorker,
  getTodosFromServer,
  handleResponse
} from "./todosWorker";
import { setLoading, setError, setTodos } from "../actions";

describe("Todos worker", () => {
  it("getTodosWorker set loading true, reset error, make request, process result and set loading false", () => {
    const gen = getTodosWorker();

    const setLoadingResult = gen.next();
    const expectedSetLoadingResult = put(setLoading(true));
    expect(setLoadingResult.value).toEqual(expectedSetLoadingResult);

    const setErrorResult = gen.next();
    const expectedSetErrorResult = put(setError(null));
    expect(setErrorResult.value).toEqual(expectedSetErrorResult);

    const getTodosFromServerResult = gen.next();
    const expectedGetTodosFromServerResult = call(getTodosFromServer);
    expect(getTodosFromServerResult.value).toEqual(
      expectedGetTodosFromServerResult
    );

    const handleResponseResult = gen.next();
    const expectedHandleResponseResult = call(handleResponse, undefined);
    expect(handleResponseResult.value).toEqual(expectedHandleResponseResult);

    const setLoadingFalseResult = gen.next();
    const expectedSetLoadingFalseResult = put(setLoading(false));
    expect(setLoadingFalseResult.value).toEqual(expectedSetLoadingFalseResult);

    const isDone = gen.next();
    expect(isDone.done).toBeTruthy();
  });

  it("handleResponse reset todos and set error message when error response", () => {
    const errorResponseEntity = {
      error: { response: { data: { error: [{ message: "error" }] } } },
      response: null
    };
    const gen = handleResponse(errorResponseEntity);

    const setTodosResult = gen.next();
    const expectedTodosResult = put(setTodos([]));
    expect(setTodosResult.value).toEqual(expectedTodosResult);

    const setErrorResult = gen.next();
    const expectedSetErrorResult = put(setError("Error loading todos!"));
    expect(setErrorResult.value).toEqual(expectedSetErrorResult);

    const isDone = gen.next();
    expect(isDone.done).toBeTruthy();
  });

  it("handleResponse set todos array when response", () => {
    const responseEntity = {
      error: null,
      response: {
        data: {
          todos: [
            {
              id: "a57f4349-0a53-48e3-996e-8b3dc4a71368",
              text: "Todo from server 1",
              completed: false
            },
            {
              id: "2a3ce1b1-7cec-419c-b113-350340a4df3e",
              text: "Todo from server 2",
              completed: true
            },
            {
              id: "63f74341-86dc-4a2a-8042-5b4a30e9c00f",
              text: "Todo from server 3",
              completed: false
            }
          ]
        }
      }
    };
    const gen = handleResponse(responseEntity);

    const setTodosResult = gen.next();
    const expectedTodosResult = put(
      setTodos(responseEntity.response.data.todos)
    );
    expect(setTodosResult.value).toEqual(expectedTodosResult);

    const isDone = gen.next();
    expect(isDone.done).toBeTruthy();
  });
});
