const States = Object.freeze(
{
	ABOUT:    0,
	CS:       1,
    ART:      2,
    ACADEMIA: 3,
    LIT:      4,
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
	case States.ART:
		document.querySelector("#art-page").classList.remove("disabled");
		break;
	case States.ACADEMIA:
		document.querySelector("#sci-page").classList.remove("disabled");
		break;
	default: break;
	}
}
