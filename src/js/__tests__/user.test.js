import getLevel from "../user";
import fetchData from "../http";

jest.mock("../http");

beforeEach(() => {
  jest.resetAllMocks();
});

test("status ok, 1", () => {
  fetchData.mockReturnValue({ status: "ok", level: "1" });
  const response = getLevel(1);
  expect(response).toBe("Ваш текущий уровень: 1");
});

test("status ok, 1", () => {
  fetchData.mockReturnValue({ status: "ok", level: "2" });
  const response = getLevel(1);
  expect(response).toBe("Ваш текущий уровень: 2");
});

test("status ok, 1", () => {
  fetchData.mockReturnValue({ status: "false", level: "1" });
  const response = getLevel(1);
  expect(response).toBe("Информация об уровне временно недоступна");
});
