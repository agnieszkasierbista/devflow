import {Conversation} from "../model/state";

export const getEllaVisit: (playerName: string) => Conversation = (playerName) => [
    {
        event: "START_VISIT",
        npcName: 'Ella',
        npcDialogueOption: `Hi ${playerName}, are you ready to start work?`,
        playerDialogueOptions: [
            {rpl: "Yes, I'm ready", event: 'READY_VISIT'},
            {rpl: "No, I'm not ready yet", event: 'REJECT_VISIT'}
        ]
    },


    {
        event: 'READY_VISIT',
        npcName: 'Ella',
        npcDialogueOption: 'Can you take care of the Task asap? Remember to change status on the Scrum board before you start working on the Task.',
        playerDialogueOptions: [
            {rpl: 'ok, immediately!', event: 'START_WORK_VISIT'},
            {rpl: "Sorry, I can't do that", event: 'REJECT_VISIT'},
            {rpl: 'ok, but in a jiffy', event: 'DELAY_WORK_VISIT'}
        ]
    },

    {
        event: 'REJECT_VISIT',
        npcName: 'Ella',
        npcDialogueOption: "Let me know when you're ready for the Task",
        playerDialogueOptions: [
            {rpl: 'Sure I will!', event: 'END_VISIT'},
        ]
    },

    {
        event: 'START_WORK_VISIT',
        npcName: 'Ella',
        npcDialogueOption: 'You are a rock star!',
        playerDialogueOptions: [
            {rpl: 'yes, you too! bye!', event: 'END_VISIT'}
        ]
    },

    {
        event: 'DELAY_WORK_VISIT',
        npcName: 'Ella',
        npcDialogueOption: "Don't wait too long",
        playerDialogueOptions: [
            {rpl: "I'mma be quick about it", event: 'END_VISIT'}
        ]
    },

    {
        event: 'END_VISIT',
        npcName: 'Ella',
        npcDialogueOption: "bye!",
        playerDialogueOptions: []
    },

]

