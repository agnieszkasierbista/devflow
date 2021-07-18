import {conversationWithJohn} from "./conversationWithJohn";
import {Conversations} from "../model/state";
import {conversationWithLingLing} from "./conversationWithLingLing";
import {conversationWithBarbara} from "./conversationWithBarbara";

export const conversations: Conversations = {
    John: conversationWithJohn,
    LingLing: conversationWithLingLing,
    Barbara: conversationWithBarbara

}