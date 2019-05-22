import {Component, Input, Output, EventEmitter} from '@angular/core';

/**
 * <voting [voteCount]="post.voteCount" [myVote]="post.myVote" (vote)="onVote($event)"></voting>
 */
@Component({
    selector: 'voting',
    template: `
        <div class="voter">
            <li 
                class="glyphicon glyphicon-menu-up vote-button"
                [class.highlighted]="myVote == 1"
                (click)="upVote()"
            ></li>
            <span class="vote-count">{{ voteCount + myVote }}</span>
            <li
                class="glyphicon glyphicon-menu-down vote-button"
                [class.highlighted]="myVote == -1"
                (click)="downVote()"
            ></li>
        </div>
    `,
    styles: [`
        .voter {
            width: 20px;
            font-size: 34px;
            text-align: center;
            color: #999;
        }
        .vote-button {
            cursor: pointer;
        }
        .highlighted {
            color: gold;
        }
    `]
})
export class VotingComponent {
    @Input() voteCount = 0;
    @Input() myVote = 0;

    @Output() change = new EventEmitter();

    upVote() {
        if (this.myVote === 1) {
            return;
        }

        this.myVote++;
        this.emitEvent();
    }

    downVote() {
        if (this.myVote === -1) {
            return;
        }

        this.myVote--;
        this.emitEvent();
    }

    emitEvent() {
        this.change.emit({myVote: this.myVote});
    }
}
