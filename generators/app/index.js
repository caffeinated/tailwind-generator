let Generator = require('yeoman-generator')

module.exports = class extends Generator {
    copyFiles() {
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json')
        )

        this.fs.copyTpl(
            this.templatePath('webpack.mix.js'),
            this.destinationPath('webpack.mix.js')
        )

        this.fs.copyTpl(
            this.templatePath('resources/scss/app.scss'),
            this.destinationPath('resources/scss/app.scss')
        )

        this.fs.copyTpl(
            this.templatePath('resources/js/bootstrap.js'),
            this.destinationPath('resources/js/bootstrap.js')
        )

        this.fs.copyTpl(
            this.templatePath('resources/js/app.js'),
            this.destinationPath('resources/js/app.js')
        )

        this.fs.copyTpl(
            this.templatePath('public/index.html'),
            this.destinationPath('public/index.html')
        )

        this.fs.copyTpl(
            this.templatePath('.gitignore'),
            this.destinationPath('.gitignore')
        )
    }

    installDependencies() {
        this.npmInstall([
            'laravel-mix',
            'tailwindcss',
            'vue'
        ], {
            'save': true
        })
    }

    end() {
        this.spawnCommandSync(
            this.destinationPath('node_modules/.bin/tailwind'),
            ['init', this.destinationPath('tailwind.js')]
        )

        this.spawnCommand('npm', ['run', 'dev'])
    }
}
