function getOptions() {
    const searchParams = new URLSearchParams(window.location.search);
    let fit = searchParams.get('fit');
    return {
        enableSearch: fit !== 'yes',
        scaleInitial: fit === 'yes' ? FamilyTree.match.boundary : 1,
    };
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

chart.load([
    // Ancestors
    { id: 1, name: "Vetka Roy", title: "", img: "", gender: 'male' }, // Father of Fulchand Roy
    { id: 2, pids: [1], name: "Mrs Roy", title: "", img: "", gender: 'female' }, // Wife of Vetka Roy
    { id: 3, fid: 1, mid: 2, pids: [4], name: "Fulchand Roy", title: "", img: "", gender: 'male' },
    { id: 4, pids: [3], name: "Mrs. SinghaRoy", title: "", img: "", gender: 'female' },

    // Kelsha's family
    { id: 5, fid: 3, mid: 4, pids: [6], name: "Kelsha SinghaRoy", img: "", gender: 'male' },
    { id: 6, pids: [5], name: "Mrs SinghaRoy", title: "", img: "", gender: 'female' },

    // Parshuram's family
    { id: 7, fid: 5, mid: 6, pids: [8], name: "Mrs SinghaRoy", img: "", gender: 'female' },
    { id: 8, pids: [7], name: "Parshuram SinghaRoy", title: "", img: "", gender: 'male' },

    // Rajkishore's family
    { id: 9, fid: 7, mid: 8, pids: [10], name: "Rajkishore SinghaRoy", title: "", img: "", gender: 'male' },
    { id: 10, pids: [9], name: "Mrs SinghaRoy1", title: "", img: "", gender: 'female' },

    // Sashibhushan's family
    { id: 11, fid: 9, mid: 10, pids: [12], name: "Sashibhushan Roy", title: "", img: "", gender: 'male' },
    { id: 12, pids: [11], name: "Shobha Roy", title: "", img: "", gender: 'female' },

    // Tapankumar's generation
    { id: 13, fid: 11, mid: 12, pids: [14], name: "Tapankumar Roy", img: "images/papa.jpg", gender: 'male' }, // Papa
    { id: 14, pids: [13], name: "Aparna Roy", title: "", img: "images/mom.jpg", gender: 'female' }, // Wife
    { id: 15, fid: 11, mid: 12, name: "Jayashree Roy", img: "", gender: 'female' },
    { id: 16, fid: 11, mid: 12, pids: [17], name: "Swapan Roy", img: "", gender: 'male' }, // Swapan Roy
    { id: 17, pids: [16], name: "Bichitra Roy", title: "", img: "", gender: 'female' }, // Swapan's wife
    { id: 18, fid: 11, mid: 12, pids: [19], name: "Jivan Roy", img: "", gender: 'male' }, // Jivan Roy
    { id: 19, pids: [18], name: "Multi Roy", title: "", img: "", gender: 'female' }, // Jivan's wife
    { id: 20, fid: 11, mid: 12, name: "Chanchal Roy", title: "Died: 2003", img: "", gender: 'male' }, // Brother of Tapankumar

    // Tapankumar's children
    { id: 21, fid: 13, mid: 14, pids: [22], name: "Anup Roy", title: "", img: "images/anup.jpg", gender: 'male' }, // Son
    { id: 22, pids: [21], name: "Neha Roy", title: "", img: "images/neha.jpg", gender: 'female' }, // Wife of Anup Roy
    { id: 23, fid: 21, mid: 22, name: "Vibhum Roy", title: "", img: "images/vibhum.jpeg", gender: 'male' }, // Son of Anup and Neha
    { id: 24, fid: 13, mid: 14, name: "Taniya Roy", title: "", img: "images/nanu.jpg", gender: 'female' }, // Daughter

    // Swapan's child
    { id: 25, fid: 16, mid: 17, name: "Monalisa Roy", title: "", img: "", gender: 'female' }, // Daughter of Swapan and Bichitra

    // Jivan's child
    { id: 26, fid: 18, mid: 19, name: "Joydeep Roy", title: "", img: "images/bro.jpg", gender: 'male' } // Son of Jivan and Multi Roy
]);
