import { atom, useAtom } from 'jotai';

const websocketAtom = atom<WebSocket | null>(null);
const messagesAtom = atom<string[]>(['']);
const logAtom = atom<string[]>([]);
const outgoingMessageAtom = atom<string>('');
const urlAtom = atom<string>('');

export function useLog() {
    return useAtom(logAtom);
}

export function useOutgoingMessage() {
    return useAtom(outgoingMessageAtom);
}

export function useMessages() {
    return useAtom(messagesAtom);
}

export function useSocket(): [WebSocket | null, (url: string) => void] {
    const [, setLog] = useLog();
    const [, setMessages] = useMessages();
    const [socket, setSocket] = useAtom(websocketAtom);

    const connect = (url: string) => {
        const wc = new WebSocket(url);
        setSocket(wc);
        wc.onopen = () => setLog((prev) => [...prev, 'Connection Established!']);
        wc.onclose = () => setLog((prev) => [...prev, 'Connection Terminated!']);
        wc.onerror = (event) => setMessages((prev) => [...prev, `${event}`]);
        wc.onmessage = (message) => {
            console.log(message);
            setMessages((prev) => [...prev, `${message.data}`]);
        };
    };

    return [socket, connect];
}

export function useSend() {
    const [socket] = useSocket();
    return (data: string) => !!socket && socket.send(data);
}

export function useUrl() {
    return useAtom(urlAtom);
}
