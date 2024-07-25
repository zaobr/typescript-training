describe('Collection restructuring', () => {

    const employees = db.getEmployees();
	// in these exercises you'll be given two data structures:
	// - shopping items list (small one)
	// - employee list (big one)
	// all items have their own `id` attributes.
	// your task will be to write functions that:
	// - turn a list into a dictionary
	// - turn a dictionary into a list

	it('array2dict can turn an array into a dictionary (with `id` key)', () => {
		// write the `array2dict` function that turns a list into a dictionary
		// all elements of the list have `id` property set

		// define `array2dict` here

		let employeeDictionary = array2dict(employees);

		expect(employees.length).toEqual(365);
		expect(Object.keys(employeeDictionary).length).toEqual(365);
		expect(employeeDictionary[7344].name).toEqual('Tiara Will');

		let shoppingDictionary = array2dict(shoppingData);

		expect(shoppingData.length).toEqual(10);
		expect(Object.keys(shoppingDictionary).length).toEqual(10);
		expect(shoppingDictionary[611830716982].name).toEqual('Beer');
	})

	it('dict2array can turn a dictionary (with `id` key) into an array', () => {
		// write the `dict2array` function that turns a dictionary into a list
		// all elements within the dictionary are available under `id` keys

		// define `dict2array` here

		let shoppingData = dict2array(shoppingDataDictionary);

		expect(Object.keys(shoppingDataDictionary).length).toEqual(10);
		expect(shoppingData.length).toEqual(10);
		expect(shoppingData.find(e => e.id == 611830716982).name).toEqual('Beer');
	})
})
