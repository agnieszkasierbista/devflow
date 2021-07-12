import {Conversation} from "../model/state";

export const conversationWithJohn: Conversation = {
    phase1:
        {
            events: "START_CONVERSATION",
            npcName: 'John',
            dialogueOption: 'hi, can you finish?',
            player: [
                {rpl: 'yes', event: 'READY'},
                {rpl: 'no', event: 'REJECT'}
            ]
        },

    phase2:
        {
            events: 'READY',
            npcName: 'John',
            dialogueOption: 'adsf',
            player: [
                {rpl: 'ok, immediately!', event: 'START_WORK'},
                {rpl: 'go fuck yourself!', event: 'REJECT'},
                {rpl: 'ok, but in a jiffy', event: 'DO_STH_BEFORE_STARTING_WORK'}
            ]
        },

}

