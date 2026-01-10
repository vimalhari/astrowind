export const CAREERS_EMAIL = 'info@criztec.com';

type MailtoOptions = {
    subject?: string;
    body?: string;
};

export function buildMailto(to: string, options: MailtoOptions = {}): string {
    const params = new URLSearchParams();

    if (options.subject) params.set('subject', options.subject);
    if (options.body) params.set('body', options.body);

    const query = params.toString();
    return `mailto:${to}${query ? `?${query}` : ''}`;
}
