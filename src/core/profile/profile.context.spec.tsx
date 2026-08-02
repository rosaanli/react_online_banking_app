import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { createRoot, Root } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { ProfileProvider, useProfileContext } from "./profile.context";

describe("ProfileContext", () => {
  let container: HTMLDivElement;
  let root: Root;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    container.remove();
  });

  it("logout clears the current user", () => {
    const TestComponent = () => {
      const { userName, setUserProfile, logout } = useProfileContext();

      return (
        <div>
          <button onClick={() => setUserProfile("Alice")}>set</button>
          <button onClick={() => logout()}>logout</button>
          <span data-testid="user">{userName}</span>
        </div>
      );
    };

    act(() => {
      root.render(
        <ProfileProvider>
          <TestComponent />
        </ProfileProvider>
      );
    });

    const buttons = container.querySelectorAll("button");

    act(() => {
      buttons[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(container.textContent).toContain("Alice");

    act(() => {
      buttons[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(container.textContent).not.toContain("Alice");
  });
});
