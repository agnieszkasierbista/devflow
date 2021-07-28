import {Conversation} from "../model/state";

export const randomDeveloperVisit : Conversation = [
    {
        event: "START_VISIT",
        npcName: 'RandomDeveloper',
        npcDialogueOption: 'hi, are you busy?',
        playerDialogueOptions: [
            {rpl: 'hi, i am not busy', event: 'READY_VISIT'},
            {rpl: 'bery busy', event: 'REJECT_VISIT'}
        ]
    },


    {
        event: 'READY_VISIT',
        npcName: 'RandomDeveloper',
        npcDialogueOption: 'Can you take care of this task asap?',
        playerDialogueOptions: [
            {rpl: 'ok, immediately!', event: 'START_WORK_VISIT'},
            {rpl: 'go fuck yourself!', event: 'REJECT_VISIT'},
            {rpl: 'ok, but in a jiffy', event: 'DELAY_WORK_VISIT'}
        ]
    },

    {
        event: 'REJECT_VISIT',
        npcName: 'RandomDeveloper',
        npcDialogueOption: 'ok,ok, but better be careful',
        playerDialogueOptions: [
            {rpl: 'yes, you too! bye!', event: 'END_VISIT'},
        ]
    },

    {
        event: 'START_WORK_VISIT',
        npcName: 'RandomDeveloper',
        npcDialogueOption: 'You are a rock star!',
        playerDialogueOptions: [
            {rpl: 'yes, you too! bye!', event: 'END_VISIT'}
        ]
    },

    {
        event: 'DELAY_WORK_VISIT',
        npcName: 'RandomDeveloper',
        npcDialogueOption: "Don/'t wait too long",
        playerDialogueOptions: [
            {rpl: 'yes, you too! bye!', event: 'END_VISIT'}
        ]
    },

    {
        event: 'END_VISIT',
        npcName: 'RandomDeveloper',
        npcDialogueOption: "bye!",
        playerDialogueOptions: []
    },

]

