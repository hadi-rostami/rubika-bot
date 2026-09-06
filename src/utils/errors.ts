// ============================================
// Base Error Classes
// ============================================

/**
 * کلاس پایه برای تمام خطاهای کتابخانه
 */
export class RubikaError extends Error {
  public code: string;
  public readonly severity: "low" | "medium" | "high" | "critical";
  public readonly timestamp: Date;
  public readonly context?: Record<string, unknown>;
  public readonly originalError?: unknown;

  constructor(
    message: string,
    code: string = "UNKNOWN_ERROR",
    severity: "low" | "medium" | "high" | "critical" = "medium",
    context?: Record<string, unknown>,
    originalError?: unknown,
  ) {
    super(message);
    this.name = this.constructor.name;

    this.code = code;
    this.severity = severity;
    this.timestamp = new Date();
    this.context = context;
    this.originalError = originalError;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RubikaError);
    }
  }

  toJSON(includeStack: boolean = false) {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      severity: this.severity,
      timestamp: this.timestamp.toISOString(),
      context: this.context,
      ...(includeStack && { stack: this.stack }),
    };
  }
}

// ============================================
// Network Errors
// ============================================

export class NetworkError extends RubikaError {
  public readonly status?: number;
  public readonly url?: string;
  public readonly method?: string;

  constructor(
    message: string,
    status?: number,
    url?: string,
    method?: string,
    originalError?: unknown,
  ) {
    super(
      message,
      "NETWORK_ERROR",
      status && status >= 500 ? "high" : "medium",
      { status, url, method },
      originalError,
    );
    this.status = status;
    this.url = url;
    this.method = method;
  }
}

export class TimeoutError extends RubikaError {
  public readonly timeout: number;

  constructor(message: string, timeout: number) {
    super(message, "TIMEOUT_ERROR", "medium", { timeout });
    this.timeout = timeout;
  }
}

export class ConnectionError extends RubikaError {
  constructor(message: string, originalError?: unknown) {
    super(message, "CONNECTION_ERROR", "high", undefined, originalError);
  }
}

export class RateLimitError extends RubikaError {
  public readonly retryAfter?: number;

  constructor(message: string, retryAfter?: number) {
    super(message, "RATE_LIMIT_ERROR", "medium", { retryAfter });
    this.retryAfter = retryAfter;
  }
}

// ============================================
// Authentication Errors
// ============================================

export class AuthenticationError extends RubikaError {
  constructor(message: string, originalError?: unknown) {
    super(message, "AUTH_ERROR", "critical", undefined, originalError);
  }
}

export class SessionExpiredError extends RubikaError {
  constructor(message: string = "Session has expired") {
    super(message, "SESSION_EXPIRED", "critical");
  }
}

export class InvalidTokenError extends RubikaError {
  constructor(message: string = "Invalid token provided") {
    super(message, "INVALID_TOKEN", "critical");
  }
}

// ============================================
// API Errors
// ============================================

export class APIError extends RubikaError {
  public readonly statusCode?: number;
  public readonly responseData?: unknown;

  constructor(
    message: string,
    statusCode?: number,
    responseData?: unknown,
    originalError?: unknown,
  ) {
    super(
      message,
      "API_ERROR",
      statusCode && statusCode >= 500 ? "high" : "medium",
      { statusCode, responseData },
      originalError,
    );
    this.statusCode = statusCode;
    this.responseData = responseData;
  }
}

export class BadRequestError extends APIError {
  constructor(message: string, responseData?: unknown) {
    super(message, 400, responseData);
    this.code = "BAD_REQUEST";
  }
}

export class NotFoundError extends APIError {
  constructor(message: string = "Resource not found") {
    super(message, 404);
    this.code = "NOT_FOUND";
  }
}

export class ForbiddenError extends APIError {
  constructor(message: string = "Access forbidden") {
    super(message, 403);
    this.code = "FORBIDDEN";
  }
}

export class ServerError extends APIError {
  constructor(message: string, responseData?: unknown) {
    super(message, 500, responseData);
    this.code = "SERVER_ERROR";
  }
}

// ============================================
// Validation Errors
// ============================================

export class ValidationError extends RubikaError {
  public readonly field?: string;
  public readonly value?: unknown;

  constructor(
    message: string,
    field?: string,
    value?: unknown,
    originalError?: unknown,
  ) {
    super(message, "VALIDATION_ERROR", "low", { field, value }, originalError);
    this.field = field;
    this.value = value;
  }
}

export class ParameterError extends ValidationError {
  constructor(parameter: string, expected: string, received: unknown) {
    super(
      `Parameter "${parameter}" must be ${expected}, received ${typeof received}`,
      parameter,
      received,
    );
    this.code = "PARAMETER_ERROR";
  }
}

// ============================================
// Handler Errors
// ============================================

export class HandlerError extends RubikaError {
  public readonly handlerName?: string;
  public readonly contextType?: string;

  constructor(
    message: string,
    handlerName?: string,
    contextType?: string,
    originalError?: unknown,
  ) {
    super(
      message,
      "HANDLER_ERROR",
      "medium",
      { handlerName, contextType },
      originalError,
    );
    this.handlerName = handlerName;
    this.contextType = contextType;
  }
}

export class FilterError extends RubikaError {
  public readonly filterName?: string;

  constructor(message: string, filterName?: string, originalError?: unknown) {
    super(message, "FILTER_ERROR", "low", { filterName }, originalError);
    this.filterName = filterName;
  }
}

// ============================================
// File Errors
// ============================================

export class FileError extends RubikaError {
  public readonly filePath?: string;
  public readonly fileSize?: number;

  constructor(
    message: string,
    filePath?: string,
    fileSize?: number,
    originalError?: unknown,
  ) {
    super(
      message,
      "FILE_ERROR",
      "medium",
      { filePath, fileSize },
      originalError,
    );
    this.filePath = filePath;
    this.fileSize = fileSize;
  }
}

export class FileTooLargeError extends FileError {
  public readonly maxSize: number;

  constructor(filePath: string, fileSize: number, maxSize: number) {
    super(
      `File "${filePath}" (${fileSize} bytes) exceeds maximum size (${maxSize} bytes)`,
      filePath,
      fileSize,
    );
    this.code = "FILE_TOO_LARGE";
    this.maxSize = maxSize;
  }
}

export class FileNotFoundError extends FileError {
  constructor(filePath: string) {
    super(`File not found: ${filePath}`, filePath);
    this.code = "FILE_NOT_FOUND";
  }
}

// ============================================
// WebSocket Errors
// ============================================

export class WebSocketError extends RubikaError {
  public readonly event?: string;
  public readonly wsCode?: number;

  constructor(
    message: string,
    event?: string,
    wsCode?: number,
    originalError?: unknown,
  ) {
    super(message, "WEBSOCKET_ERROR", "high", { event, wsCode }, originalError);
    this.event = event;
    this.wsCode = wsCode;
  }
}

export class WebSocketConnectionClosedError extends WebSocketError {
  constructor(code: number, reason: string) {
    super(`WebSocket closed: ${reason}`, "close", code);
    this.code = "WS_CLOSED";
  }
}

// ============================================
// Retry Strategy Types
// ============================================

export interface RetryConfig {
  maxAttempts: number;
  baseDelay: number;
  maxDelay: number;
  strategy: "fixed" | "linear" | "exponential";
  shouldRetry?: (error: RubikaError) => boolean;
}

export const defaultRetryConfig: RetryConfig = {
  maxAttempts: 3,
  baseDelay: 1000,
  maxDelay: 30000,
  strategy: "exponential",
  shouldRetry: (error) => {
    if (
      error instanceof AuthenticationError ||
      error instanceof ValidationError ||
      error instanceof InvalidTokenError ||
      error instanceof SessionExpiredError
    ) {
      return false;
    }
    return (
      error instanceof NetworkError ||
      error instanceof TimeoutError ||
      error instanceof ConnectionError ||
      error instanceof ServerError ||
      error instanceof RateLimitError
    );
  },
};

// ============================================
// Error Handler Middleware
// ============================================

export type ErrorHandler<T = unknown> = (
  error: RubikaError,
  context?: T,
) => Promise<void> | void;

export interface ErrorMiddleware<T = unknown> {
  priority: number;
  handler: ErrorHandler<T>;
  match?: (error: RubikaError) => boolean;
}

export class ErrorMiddlewareManager<T = unknown> {
  private middlewares: ErrorMiddleware<T>[] = [];

  use(
    handler: ErrorHandler<T>,
    priority: number = 100,
    match?: (error: RubikaError) => boolean,
  ): void {
    this.middlewares.push({ handler, priority, match });
    this.middlewares.sort((a, b) => a.priority - b.priority);
  }

  async execute(error: RubikaError, context?: T): Promise<void> {
    for (const middleware of this.middlewares) {
      if (!middleware.match || middleware.match(error)) {
        try {
          await middleware.handler(error, context);
        } catch (middlewareError) {
          console.error(
            "[ErrorMiddleware] Middleware failed:",
            middlewareError,
          );
        }
      }
    }
  }
}

// ============================================
// Enhanced Logger
// ============================================

export type LogLevel = "debug" | "info" | "warn" | "error" | "critical";

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
  error?: RubikaError;
  context?: Record<string, unknown>;
}

export interface LoggerConfig {
  minLevel: LogLevel;
  output: "console" | "file" | ((entry: LogEntry) => void);
  colors?: boolean;
  includeStack?: boolean;
}

const defaultLoggerConfig: LoggerConfig = {
  minLevel: "info",
  output: "console",
  colors: true,
  includeStack: false,
};

const logLevelPriority: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
  critical: 4,
};

export class EnhancedLogger<T = unknown> {
  private config: LoggerConfig;
  private errorMiddleware: ErrorMiddlewareManager<T>;
  private botOrClient?: T;

  constructor(botOrClient?: T, config: Partial<LoggerConfig> = {}) {
    this.config = { ...defaultLoggerConfig, ...config };
    this.errorMiddleware = new ErrorMiddlewareManager<T>();
    this.botOrClient = botOrClient;
  }

  onError(
    handler: ErrorHandler<T>,
    priority?: number,
    match?: (error: RubikaError) => boolean,
  ): void {
    this.errorMiddleware.use(handler, priority, match);
  }

  /**
   * متد اصلی لاگ کردن پیام (بدون در نظر گرفتن به عنوان خطا)
   */
  async logMessage(
    level: LogLevel,
    message: string,
    context?: Record<string, unknown>,
  ): Promise<void> {
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date(),
      context,
    };
    await this.log(entry);
  }

  /**
   * متد مخصوص ثبت خطا و اجرای میدلورها
   */
  async error(
    message: string | RubikaError | unknown,
    level: LogLevel = "error",
    context?: Record<string, unknown>,
  ): Promise<void> {
    let error: RubikaError;

    if (message instanceof RubikaError) {
      error = message;
    } else if (message instanceof Error) {
      error = new RubikaError(
        message.message,
        "UNKNOWN_ERROR",
        "medium",
        context,
        message,
      );
    } else {
      error = new RubikaError(
        String(message),
        "UNKNOWN_ERROR",
        "medium",
        context,
      );
    }

    const logEntry: LogEntry = {
      level,
      message: error.message,
      timestamp: new Date(),
      error,
      context: { ...context, ...error.context },
    };

    await this.log(logEntry);

    // ✅ فقط برای خطاهای واقعی میدلور اجرا شود
    if (level === "error" || level === "critical") {
      await this.errorMiddleware.execute(error, this.botOrClient);
    }
  }

  async log(entry: LogEntry): Promise<void> {
    if (
      logLevelPriority[entry.level] < logLevelPriority[this.config.minLevel]
    ) {
      return;
    }

    const formattedEntry = this.formatEntry(entry);

    if (this.config.output === "console") {
      this.writeToConsole(formattedEntry, entry);
    } else if (typeof this.config.output === "function") {
      this.config.output(entry);
    }
  }

  private formatEntry(entry: LogEntry): string {
    const time = entry.timestamp.toISOString();
    const level = entry.level.toUpperCase().padEnd(8);
    const message = entry.message;

    if (this.config.colors) {
      const colors: Record<LogLevel, string> = {
        debug: "\x1b[36m",
        info: "\x1b[32m",
        warn: "\x1b[33m",
        error: "\x1b[31m",
        critical: "\x1b[35m",
      };
      const reset = "\x1b[0m";
      return `${time} | ${colors[entry.level]}${level}${reset} | ${message}`;
    }

    return `${time} | ${level} | ${message}`;
  }

  private writeToConsole(formatted: string, entry: LogEntry): void {
    switch (entry.level) {
      case "debug":
      case "info":
        console.log(formatted);
        break;
      case "warn":
        console.warn(formatted);
        break;
      case "error":
      case "critical":
        console.error(formatted);
        if (this.config.includeStack && entry.error?.stack) {
          console.error(entry.error.stack);
        }
        break;
    }
  }

  // Convenience methods
  async debug(
    message: string,
    context?: Record<string, unknown>,
  ): Promise<void> {
    await this.logMessage("debug", message, context);
  }

  async info(
    message: string,
    context?: Record<string, unknown>,
  ): Promise<void> {
    await this.logMessage("info", message, context);
  }

  async warn(
    message: string,
    context?: Record<string, unknown>,
  ): Promise<void> {
    await this.logMessage("warn", message, context);
  }

  async critical(
    message: string,
    context?: Record<string, unknown>,
  ): Promise<void> {
    await this.error(
      new RubikaError(message, "CRITICAL", "critical", context),
      "critical",
    );
  }
}

// ============================================
// Retry Helper
// ============================================

export async function withRetry<T>(
  fn: () => Promise<T>,
  config: Partial<RetryConfig> = {},
): Promise<T> {
  const retryConfig = { ...defaultRetryConfig, ...config };
  let lastError: RubikaError | null = null;
    
  for (let attempt = 1; attempt <= retryConfig.maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError =
        error instanceof RubikaError
          ? error
          : new RubikaError(
              error instanceof Error ? error.message : String(error),
              "RETRY_ERROR",
              "medium",
              { attempt, maxAttempts: retryConfig.maxAttempts },
              error,
            );

      if (!retryConfig.shouldRetry || !retryConfig.shouldRetry(lastError)) {
        throw lastError;
      }

      if (attempt === retryConfig.maxAttempts) {
        break;
      }

      const delay = calculateDelay(attempt, retryConfig);
      console.warn(
        `[Retry] Attempt ${attempt}/${retryConfig.maxAttempts} failed. Retrying in ${delay}ms...`,
      );
      await sleep(delay);
    }
  }

  throw (
    lastError ?? new RubikaError("Unknown error during retry", "RETRY_FAILED")
  );
}

function calculateDelay(attempt: number, config: RetryConfig): number {
  let delay: number;
  switch (config.strategy) {
    case "fixed":
      delay = config.baseDelay;
      break;
    case "linear":
      delay = config.baseDelay * attempt;
      break;
    case "exponential":
      delay = config.baseDelay * Math.pow(2, attempt - 1);
      break;
    default:
      delay = config.baseDelay;
  }
  return Math.min(delay, config.maxDelay);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ============================================
// Error Utilities
// ============================================

export function toRubikaError(
  error: unknown,
  defaultMessage: string = "An unexpected error occurred",
  code: string = "UNKNOWN_ERROR",
  severity: "low" | "medium" | "high" | "critical" = "medium",
): RubikaError {
  if (error instanceof RubikaError) {
    return error;
  }

  if (error instanceof Error) {
    return new RubikaError(error.message, code, severity, undefined, error);
  }

  return new RubikaError(
    typeof error === "string" ? error : defaultMessage,
    code,
    severity,
    undefined,
    error,
  );
}

export function isErrorRecoverable(error: RubikaError): boolean {
  return defaultRetryConfig.shouldRetry?.(error) ?? false;
}

export function groupErrorsBySeverity(
  errors: RubikaError[],
): Record<string, RubikaError[]> {
  return errors.reduce(
    (acc, error) => {
      const key = error.severity;
      if (!acc[key]) acc[key] = [];
      acc[key].push(error);
      return acc;
    },
    {} as Record<string, RubikaError[]>,
  );
}

export default EnhancedLogger;
