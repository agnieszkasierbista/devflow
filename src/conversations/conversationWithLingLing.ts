import {Conversation} from "../model/state";

export const conversationWithLingLing: Conversation = [
    {
        event: "START_CONVERSATION",
        npcName: 'LingLing',
        npcDialogueOption: 'hi, are you busy?',
        playerDialogueOptions: [
            {rpl: 'hi, i am not busy', event: 'READY'},
            {rpl: 'bery busy', event: 'REJECT'}
        ]
    },


    {
        event: 'READY',
        npcName: 'LingLing',
        npcDialogueOption: 'Can you take care of this task asap?',
        playerDialogueOptions: [
            {rpl: 'ok, immediately!', event: 'START_WORK'},
            {rpl: 'go fuck yourself!', event: 'REJECT'},
            {rpl: 'ok, but in a jiffy', event: 'DELAY_WORK'}
        ]
    },

    {
        event: 'REJECT',
        npcName: 'LingLing',
        npcDialogueOption: 'ok,ok, but better be careful',
        playerDialogueOptions: [
            {rpl: 'yes, you too! bye!', event: 'END_CONVERSATION'},
        ]
    },

    {
        event: 'START_WORK',
        npcName: 'LingLing',
        npcDialogueOption: 'You are a rock star!',
        playerDialogueOptions: [
            {rpl: 'yes, you too! bye!', event: 'END_CONVERSATION'}
        ]
    },

    {
        event: 'DELAY_WORK',
        npcName: 'LingLing',
        npcDialogueOption: "Don/'t wait too long",
        playerDialogueOptions: [
            {rpl: 'yes, you too! bye!', event: 'END_CONVERSATION'}
        ]
    },

    {
        event: 'END_CONVERSATION',
        npcName: 'LingLing',
        npcDialogueOption: "bye!",
        playerDialogueOptions: []
    },

]

