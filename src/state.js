const States = Object.freeze(
{
	ABOUT: 0,
	CS:    1,
});

const SetState = (page) =>
{
	document.querySelectorAll(".page").forEach((element) => element.classList.add("disabled"));

	switch (page)
	{
	case States.ABOUT:
		document.querySelector("#about-page").classList.remove("disabled");
		break;
	case States.CS:
		document.querySelector("#cs-page").classList.remove("disabled");
		break;
	default: break;
	}
}
