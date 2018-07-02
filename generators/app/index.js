let Generator = require('yeoman-generator')

module.exports = class extends Generator {
    copyFiles() {
        this.fs.copyTpl(
            this.templatePath('_.gitignore'),
            this.destinationPath('.gitignore')
        )

        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json')
        )

        this.fs.copyTpl(
            this.templatePath('_webpack.mix.js'),
            this.destinationPath('webpack.mix.js')
        )

        this.fs.copyTpl(
            this.templatePath('resources/scss/_app.scss'),
            this.destinationPath('resources/scss/app.scss')
        )

        this.fs.copyTpl(
            this.templatePath('resources/js/_bootstrap.js'),
            this.destinationPath('resources/js/bootstrap.js')
        )

        this.fs.copyTpl(
            this.templatePath('resources/js/_app.js'),
            this.destinationPath('resources/js/app.js')
        )

        this.fs.copyTpl(
            this.templatePath('public/_index.html'),
            this.destinationPath('public/index.html')
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
