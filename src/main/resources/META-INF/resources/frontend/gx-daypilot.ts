import { html, LitElement } from 'lit-element';
import { property, customElement } from 'lit-element';
import { DayPilot } from 'daypilot-pro-javascript';

@customElement('gx-daypilot')
export class GxDaypilot extends LitElement {

	@property()
	name = 'Farrukh';

	render() {
		return html`<slot></slot>`;
	}

	connectedCallback() {
		super.connectedCallback();
		this.initComp();
	}

	initComp = () => {
		const dp = new DayPilot.Scheduler("dp", {
			cellWidthSpec: "Fixed",
			cellWidth: 20,
			timeHeaders: [{ "groupBy": "Week" }, { "groupBy": "Day", "format": "d" }],
			scale: "Day",
			days: DayPilot.Date.today().daysInMonth(),
			startDate: DayPilot.Date.today().firstDayOfMonth(),
			eventHeight: 30,
			timeRangeSelectedHandling: "Enabled",
			onTimeRangeSelected: async (args) => {
				const dp = args.control;
				const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
				dp.clearSelection();
				if (modal.canceled) { return; }
				dp.events.add({
					start: args.start,
					end: args.end,
					id: DayPilot.guid(),
					resource: args.resource,
					text: modal.result
				});
			},
			eventMoveHandling: "Update",
			onEventMoved: (args) => {
				args.control.message("Event moved: " + args.e.text());
			},
			eventResizeHandling: "Update",
			onEventResized: (args) => {
				args.control.message("Event resized: " + args.e.text());
			},
			eventDeleteHandling: "Update",
			onEventDeleted: (args) => {
				args.control.message("Event deleted: " + args.e.text());
			},
			eventClickHandling: "Disabled",
			eventHoverHandling: "Bubble",
			bubble: new DayPilot.Bubble({
				onLoad: (args) => {
					// if event object doesn't specify "bubbleHtml" property 
					// this onLoad handler will be called to provide the bubble HTML
					args.html = "Event details";
				}
			}),
			treeEnabled: true,
		});
		dp.resources = [
			{ name: "Resource 1", id: "R1" },
			{ name: "Resource 2", id: "R2" },
			{ name: "Resource 3", id: "R3" },
			{ name: "Resource 4", id: "R4" },
			{ name: "Resource 5", id: "R5" },
			{ name: "Resource 6", id: "R6" },
			{ name: "Resource 7", id: "R7" },
			{ name: "Resource 8", id: "R8" },
			{ name: "Resource 9", id: "R9" },
		];
		dp.events.list = [];
		dp.init();
	};

}