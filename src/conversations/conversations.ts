import {conversationWithJohn} from "./conversationWithJohn";
import {Conversations} from "../model/state";
import {conversationWithLingLing} from "./conversationWithLingLing";
import {conversationWithBarbara} from "./conversationWithBarbara";
import {conversationWithElla} from "./conversationWithElla";
import {conversationWithMike} from "./conversationWithMike";
import {conversationWithRandomDeveloper} from "./conversationWithRandomDeveloper";

export const conversations: Conversations = {
    John: conversationWithJohn,
    LingLing: conversationWithLingLing,
    Barbara: conversationWithBarbara,
    Ella: conversationWithElla,
    Mike: conversationWithMike,
    RandomDeveloper: conversationWithRandomDeveloper,

}