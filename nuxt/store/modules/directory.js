export const state = () => ({
    directory: {
        dirPath: [
            { uuid: '46nq3246niqü3564üpq356', name: 'abc' },
            { uuid: 'oü6oj36jiopüj6pp2356', name: 'def' },
            { uuid: '36üo256j2567jo2üo57üj+257', name: 'ghi123' }
        ],
        dirItems: [
            { name: 'Abc ich bin eine File', type: 'File', size: 10000, date: 1337000000000 },
            { name: 'Testfile1234', type: 'File', size: 5133513, date: 42335135000000 },
            { name: '5j35135', type: 'File', size: 134134314, date: 314511351344 }
        ],
        subDirectoryCount: 20,
        subFileCount: 500,
        followingDirectorys: 20,
        followingFiles: 500,
        sizeSum: 1303376534034
    }
})

export const getters = {
    dirPath: state => state.directory.dirPath,
    dirItems: state => state.directory.dirItems,
    followingDirectorys: state => state.directory.followingDirectorys,
    followingFiles: state => state.directory.followingFiles,
    sizeSum: state => state.directory.sizeSum
}

export const mutations = {
    setAuthUser(state, { name, email, flags, volume, usedVolume }) {
        state.user.name = name || ''
        state.user.email = email || ''
        state.user.flags = Number(flags) || 0
        state.user.volume = Number(volume) || 0
        state.user.usedVolume = Number(usedVolume) || 0
    }
}