import { Platform } from '@lib/frontend/core/utils/Platform/Platform';

let isEnabled = false;

if (Platform.isWebApp) {
  const HOVER_THRESHOLD_MS = 1000;
  let lastTouchTimestamp = 0;

  const enableHover = () => {
    if (isEnabled || Date.now() - lastTouchTimestamp < HOVER_THRESHOLD_MS) {
      return;
    }
    isEnabled = true;
  };

  const disableHover = () => {
    lastTouchTimestamp = Date.now();
    if (isEnabled) {
      isEnabled = false;
    }
  };

  document.addEventListener('touchstart', disableHover, true);
  document.addEventListener('touchmove', disableHover, true);
  document.addEventListener('mousemove', enableHover, true);
}

export const isHoverEnabled = () => isEnabled;
