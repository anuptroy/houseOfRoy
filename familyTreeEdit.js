function getOptions() {
    const searchParams = new URLSearchParams(window.location.search);
    let fit = searchParams.get('fit');
    let enableSearch = true;
    let scaleInitial = 1;
    if (fit === 'yes') {
        enableSearch = false;
        scaleInitial = FamilyTree.match.boundary;
    }
    return { enableSearch, scaleInitial };
}

var options = getOptions();

var chart = new FamilyTree(document.getElementById("tree"), {
    mouseScrool: FamilyTree.none,
    scaleInitial: options.scaleInitial,
    siblingSeparation: 100,
    template: 'john',
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img",
    }
});

//pid: partner id
//mid: mother id
//fid: fatherid


chart.load([
    { id: 1, pids: [2], name: "Kelsha SinghaRoy", img: "", gender: 'male' },
    { id: 2, pids: [1], name: "Mrs SinghaRoy", title: "", img: "", gender: 'female' }, //

    { id: 3, pids: [4], mid: 2, fid: 1, name: "Mrs SinghaRoy", img: "", gender: 'female' },

    { id: 4, pids: [3], name: "Parshuram SinghaRoy", title: "", img: "", gender: 'male' },

    { id: 6, mid: 3, fid: 4, pids: [7], name: "Rajkishore SinghaRoy", title: "", img: "", gender: 'male' },
    { id: 7, pids: [6], name: "Mrs SinghaRoy1", title: "", img: "", gender: 'female' },

    { id: 12, fid: 6, mid: 7, pids: [14], name: "Sashibhushan Roy", title: "", img: "", gender: 'male' }, //Grandpa
    { id: 14, pids: [12], name: "Shobha Roy", title: "", img: "", gender: 'female' }, //GrandMa

    { id: 16, fid: 12, mid: 14, pids: [20], name: "Tapankumar Roy", img: "images/papa.jpg", gender: 'male' }, //Papa
    { id: 17, fid: 12, mid: 14, name: "Mouni Roy", img: "", gender: 'female' },
    { id: 18, fid: 12, mid: 14, pids: [25], name: "Swapan Roy", img: "", gender: 'male' }, // Swapan Roy
    { id: 19, fid: 12, mid: 14, pids: [26], name: "Jivan Roy", img: "", gender: 'male' }, // Jivan Roy

    { id: 20, pids: [16], name: "Aparna Roy", title: "", img: "images/mom.jpg", gender: 'female' }, // Wife of Tapankumar Roy

    // Children of Tapankumar Roy and Aparna Roy
    { id: 21, fid: 16, mid: 20, pids: [22], name: "Anup Roy", title: "", img: "images/anup.jpg", gender: 'male' }, // Son
    { id: 22, pids: [21], name: "Neha Roy", title: "", img: "images/neha.jpg", gender: 'female' }, // Wife of Anup Roy
    { id: 23, fid: 16, mid: 20, name: "Taniya Roy", title: "", img: "images/nanu.jpg", gender: 'female' }, // Daughter

    // Child of Anup Roy and Neha Roy
    { id: 24, fid: 21, mid: 22, name: "Vibhum Roy", title: "", img: "images/vibhum.jpeg", gender: 'male' }, // Son of Anup and Neha

    // Wife of Swapan Roy
    { id: 25, pids: [18], name: "Bichitra Roy", title: "", img: "", gender: 'female' },

    // Child of Swapan Roy and Bichitra Roy
    { id: 28, fid: 18, mid: 25, name: "Monalisa Roy", title: "", img: "", gender: 'female' }, // Daughter of Swapan and Bichitra

    // Wife of Jivan Roy
    { id: 26, pids: [19], name: "Multi Roy", title: "", img: "", gender: 'female' },

    // Child of Jivan Roy and Multi Roy
    { id: 27, fid: 19, mid: 26, name: "Joydeep Roy", title: "", img: "images/bro.jpg", gender: 'male' } // Son of Jivan and Multi Roy
]);






function getOptions() {
    const searchParams = new URLSearchParams(window.location.search);
    var fit = searchParams.get('fit');
    var enableSearch = true;
    var scaleInitial = 1;
    if (fit == 'yes') {
        enableSearch = false;
        scaleInitial = FamilyTree.match.boundary;
    }
    return { enableSearch, scaleInitial };
}

