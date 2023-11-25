export const validateNumbers = (value: string) => {
	if (!isNaN(value as any)) return true;
	return false;
}