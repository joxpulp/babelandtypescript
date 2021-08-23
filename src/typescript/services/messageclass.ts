import 'regenerator-runtime/runtime';
import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname, '../file/messageslog.txt');

interface Messages {
	email: string;
	date: string;
	time: string;
	message: string;
}

export default class Message {
	messages: Array<Messages>;

	constructor() {
		this.messages = [];
	}

	async getMessages(): Promise<Array<Messages>> {
		try {
			const txtFile: Array<Messages> = JSON.parse(
				await fs.readFile(filePath, 'utf-8')
			);
			this.messages = txtFile;
			return this.messages;
		} catch (error) {
			console.log(error);
			return this.messages;
		}
	}

	async newMessage(
		email: string,
		date: string,
		time: string,
		message: string
	): Promise<Array<Messages>> {
		try {
			this.messages.push({
				email,
				date,
				time,
				message,
			});
			await fs.writeFile(filePath, JSON.stringify(this.messages, null, 2));
			return this.messages;
		} catch (error) {
			console.log(error);
			return this.messages;
		}
	}
}
