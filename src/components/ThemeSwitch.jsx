"use client";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Enable notifications">
      <Switch.Content>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Content>
    </Switch>
  );
};

export default ThemeSwitch;
