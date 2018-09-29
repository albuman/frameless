type EventHandler = (evt) => void;

interface Listener {
	handler: EventHandler;
	event: string;
}

export class RootEventListener {
	private target: any = document;
	private listeners: Listener[] = <Listener[]>[];

	constructor(target?: any) {
		if(target) {
			this.target = target;
		}
	}

	public add(event: string, listener: EventHandler, capture?: boolean) {
		this.listeners.push({
			handler: listener,
			event: event
		});

		this.target.addEventListener(event, listener, capture);
	}

	public remove() {
		this.listeners.forEach((listener: Listener) => {
			this.target.removeEventListener(listener.event, listener.handler);
		});
	}
}