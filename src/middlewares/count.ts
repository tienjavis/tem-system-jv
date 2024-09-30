class Count
{
	public count = 0;
	public userAccessSet = new Set<string>();

	public pushUserAccessSet(userId: string) {
		this.userAccessSet.add(userId);
		this.increment();
	}

	public increment()
	{
		this.count++;
	}

	public decrement()
	{
		this.count--;
	}

}

export default new Count();
