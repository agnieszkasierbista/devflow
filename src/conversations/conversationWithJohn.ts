import {Conversation} from "../model/state";

export const conversationWithJohn: Conversation = [
            {
            event: "START_CONVERSATION",
            npcName: 'John',
            npcDialogueOption: 'hi, are you busy?',
            playerDialogueOptions: [
                {rpl: 'hi, i am not busy', event: 'READY'},
                {rpl: 'bery busy', event: 'REJECT'}
            ]
        },


        {
            event: 'READY',
            npcName: 'John',
            npcDialogueOption: 'Can you take care of this task asap?',
            playerDialogueOptions: [
                {rpl: 'ok, immediately!', event: 'START_WORK'},
                {rpl: 'go fuck yourself!', event: 'REJECT'},
                {rpl: 'ok, but in a jiffy', event: 'DELAY_WORK'}
            ]
        },

    {
        event: 'REJECT',
        npcName: 'John',
        npcDialogueOption: 'ok,ok, but better be careful',
        playerDialogueOptions: [
            {rpl: 'yes, you too!', event: 'END_CONVERSATION'},
        ]
    },

    {
        event: 'START_WORK',
        npcName: 'John',
        npcDialogueOption: 'You are a rock star!',
        playerDialogueOptions: [
            {rpl: 'yes, you too! bye!', event: 'END_CONVERSATION'}
        ]
    },

    {
        event: 'DELAY_WORK',
        npcName: 'John',
        npcDialogueOption: "Don/'t wait too long",
        playerDialogueOptions: [
            {rpl: 'yes, you too! bye!', event: 'END_CONVERSATION'}
        ]
    },

    {
        event: 'END_CONVERSATION',
        npcName: 'John',
        npcDialogueOption: "bye!",
        playerDialogueOptions: []
    },

]

