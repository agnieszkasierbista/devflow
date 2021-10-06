export const codeEditorPath = '/code-editor' as const;
export const communicatorPath = '/communicator' as const;
export const webBrowserPath = '/web-browser' as const;


export const configFilePath = '/code-editor/config-file' as const;
export const indexFilePath = '/code-editor/index-file' as const;
export const mainFilePath = '/code-editor/main-file' as const;

export const codeEditorTabsPaths = [configFilePath, indexFilePath, mainFilePath] as const;

export const conversationWithJohnPath = '/communicator/conversation-with-john' as const;
export const conversationWithBarbaraPath = '/communicator/conversation-with-barbara' as const;
export const conversationWithLinglingPath = '/communicator/conversation-with-lingling' as const;

export const conversationsPaths = [conversationWithJohnPath, conversationWithBarbaraPath, conversationWithLinglingPath];

export const taskPath = '/web-browser/task' as const;
export const scrumBoardPath = '/web-browser/scrum-board-path' as const;
export const funnyKittensPath = '/web-browser/funny-kittens' as const;
export const funnyDogsPath = '/web-browser/funny-dogs' as const;
export const funnyLizardsPath = '/web-browser/funny-lizards' as const;

export const webBrowserTabsPaths = [taskPath, scrumBoardPath, funnyKittensPath, funnyDogsPath, funnyLizardsPath] as const;
